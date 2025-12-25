console.log("Akhil Maurya")

const accountId = 12345
let accountName = "Akhil"
var accountPassword = 12345656
accountCity = "Gurugram"

let accountState

console.log(accountId)
/*
    Prefer not to use var because of issue in block and function scope.

    const value cannot be change
*/
console.table([accountId,accountName,accountPassword,accountCity,accountState])