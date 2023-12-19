
import BN from "bn.js";
import {bn_from_decimal} from "../my_fn/utils";
import Web3 from "web3"
import { abi } from "../public/evm_data";
import { telegram_send } from "../my_fn/telegram";
const frax_moonwell = {
    monitor_threshold: (new BN("200000")).mul(bn_from_decimal(18)),

    token_adress:"0x322E86852e492a7Ee17f28a78c663da38FB33bfb",
    pool_address:"0x1C55649f73CDA2f72CEf3DD6C5CA3d49EFcF484C"
}
const rpc_url = "wss://wss.api.moonbeam.network"
export const monitor_frax_moonwell = async ()=>{
    const web3 = new Web3(rpc_url)
    const token_contract =  new web3.eth.Contract(abi.ERC20 as any, frax_moonwell.token_adress)
    
    while (true){
        const balance = await token_contract.methods.balanceOf(frax_moonwell.pool_address).call()
        if (new BN(balance).lt(frax_moonwell.monitor_threshold)){
            console.log('FRAX is greater than threshold')
            console.log(balance)

            telegram_send('FRAX is greater than threshold in moonwell')
        }

        await new Promise(r => setTimeout(r, 60* 1000))
    }
    

   
}