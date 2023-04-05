export class SubmitForm{
    OnSubmitForm(data:any, inputValue: any){
        alert('Saved success')
        console.log(data);
        inputValue = "";
    }
}