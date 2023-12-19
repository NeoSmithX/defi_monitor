import BN from 'bn.js'
export const bn_from_decimal = (decimal:number):BN=>{
    return new BN('1'+'0'.repeat(decimal))
}