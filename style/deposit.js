document.getElementById('deposit-btn').addEventListener('click',function(){
   const inputs = document.getElementById('deposit-input')
const newDeposit = inputs.value 
const newDepositNumber = parseFloat(newDeposit)
inputs.value=''

if(isNaN(newDepositNumber)){
    alert('provide a valid number')
    return
}

const deposit = document.getElementById('deposited')
const previousDeposit = deposit.innerText
const previousDepositNumber = parseFloat(previousDeposit)
 
const totalDeposit = previousDepositNumber+newDepositNumber


const balance = document.getElementById('withdrawn')
const previousBalance = balance.innerText
const PreviousTotalBalance = parseFloat(previousBalance)

const totalBalance =PreviousTotalBalance+newDepositNumber

balance.innerText =totalBalance
deposit.innerText =totalDeposit
})

document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawValue = withdrawInput.value
    const newWithdrawAmount = parseFloat(withdrawValue)
    withdrawInput.value = ''

    if(isNaN(newWithdrawAmount)){
        alert('provide a valid number' )
        return
    }

    const withdrawA = document.getElementById('withdraw-adding')
    const withdrawText = withdrawA.innerText
    const previousWithdrawTextNumber = parseFloat(withdrawText)

    const withdrawAdded = previousWithdrawTextNumber+newWithdrawAmount

const balance = document.getElementById('withdrawn')
const balanceText = balance.innerText
const balanceTextNumber = parseFloat(balanceText)

const balanceTotal = balanceTextNumber-newWithdrawAmount

if(newWithdrawAmount>balanceTextNumber){
    alert('eto taka nai bhai')
return
}

balance.innerText = balanceTotal

    withdrawA.innerText = withdrawAdded
})