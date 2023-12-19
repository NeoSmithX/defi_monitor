import { monitor_frax_moonwell } from "./my_defi/frax_moonwell"
import { telegram_send } from "./my_fn/telegram"


const main = async () =>{
    telegram_send('defi monitor start')

    monitor_frax_moonwell()
}

main().then(() => {
    console.log('done')
})