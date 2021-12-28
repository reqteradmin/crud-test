import { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function Main() {
    const [firstName,setFirstName] =useState('');
    const [lastName,setLastName] =useState('');
    const [phoneNumber,setPhoneNumber] =useState('');
    const [dateOfBirth,setDateOfBirth] =useState('');
    const [email,setEmail] =useState('');
    const [bankAccountNumber,setBankAccountNumber] =useState('');
    const [emailErrorText,setEmailErrorText] = useState('');
    const [bankAccountErrorText,setBankAccountErrorText] = useState('');
    const [phoneNumberErrorText,setPhoneNumberErrorText] = useState('');
    const [isSaving,setIsSaving] = useState(false);
    const [savingError,setSavingError] = useState('');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //we assume for bank account number just it's length must be greater than 10.For more vlidation must be added here.
    const checkBankAccountNumber = () =>{
        if(bankAccountNumber.length <10 )
            return false;
        return true;
    }
    const handleSaveCustomer= () =>{
        //before sending request to back-end for saving customer ,we do some validation here
        let hasError = false;
        if(!emailRegex.test(email))
        {
          hasError=true;
          setEmailErrorText('Please enter an valid email');
        }
        else
        {
          setEmailErrorText('');
        }
        if(!checkBankAccountNumber())
        {
            hasError = true;
            setBankAccountErrorText('Bank account number is not valid.');
        }
        else
            setBankAccountErrorText('');
        
        //for phone number validation just we check length must be =10
        if(phoneNumber.length !== 10)
        {
            hasError = true;
            setPhoneNumberErrorText('Please enter a valid phone number');
        }
        else
            setPhoneNumberErrorText('')
        if(!hasError){
            setIsSaving(true);
            //for demo purpose url is hardcoede
            const apiUrl = "http://localhost:4000/customer";
            const requestOption = {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({"FirstName" : firstName , "LastName" :lastName,"Email":email,"DateOfBirth":dateOfBirth,"PhoneNumber":phoneNumber,"BankAccountNumber":bankAccountNumber})
            };
            (async ()=> {
                try{
                    const response = await fetch(apiUrl,requestOption).catch( error => {
                        console.log(error);
                    });
                    if(response.ok)
                    {
                        setSavingError('');
                        alert('Customer saved.');
                    }
                    else{
                        const resp = await response.json();
                        setSavingError(resp.message);
                        alert(resp.message);
                    }
                }
                catch(err){
                    alert('There is a problem in saving customer');
                }
                setIsSaving(false);
            })();
        }
    }

  return (
    <>
      <Typography variant="h6" gutterBottom >
        Customer Information
        {!!savingError?<Alert severity="error">{savingError}</Alert>:null}
        

      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date Of Birth"
            fullWidth
            variant="standard"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number(example(Sweden):0352307444)"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            error= {!!phoneNumberErrorText}
            helperText ={phoneNumberErrorText && phoneNumberErrorText}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error= {!!emailErrorText}
            helperText ={emailErrorText && emailErrorText}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bankAccountNumber"
            name="bankAccountNumber"
            label="Bank Account Number"
            fullWidth
            variant="standard"
            value={bankAccountNumber}
            onChange={e => setBankAccountNumber(e.target.value)}
            error= {!!bankAccountErrorText}
            helperText ={bankAccountErrorText && bankAccountErrorText}
          />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" onClick={handleSaveCustomer}
            disabled = {isSaving}
        >Save</Button>
        </Grid>
      </Grid>
    </>
  );
}