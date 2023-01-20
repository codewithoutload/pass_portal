const addIndividual=document.querySelector(".addIndividualBtnDiv");
const referenceDiv=document.querySelector(".form-bottom");
let i=0;
// const number_arr=["Second","Third","Fourth","Fifth","Sixth","Seventh","eighth","ninth","eleventh"];
const removeButton=document.querySelector("#removeBtn-1");


addIndividual.addEventListener('click',target=>{
    console.log("hi");
    referenceDiv.insertAdjacentHTML('beforebegin',`<div class="form-mid" id="extraDiv${i+1}">
    <!-- <img class="bgpic" src="./form mid.png" alt=""> -->
    <div class="form">
        <div class="person">
            <div class="pass-type">
                <P class="p-person"> Member</P>
                <div class="remove-button" id="removeBtn-${i+1}" onclick="Delete(event, 'extraDiv${i+1}')">
                    Remove
                </div>
                <p class="textinput">Pass type</p>
                <div class="custom-select">
                    <select name="" id="">
                    <option value="0">Premium Pass</option>
                    <option value="asdasd">asdsda</option>
                </select>
                </div>
            </div>
            <div class=" pass-type">
                <p class="textinput"> First Name</p>
                <input type="text" class="input-text-field " required>
            </div>
            <div class=" pass-type">
                <p class="textinput"> Last Name</p>
                <input type="text" class="input-text-field " required>
            </div>
            <div class=" pass-type">
                <p class="textinput">E-mail</p>
                <input type="text" class="input-text-field " required>
            </div>
            <div class=" pass-type">
                <p class="textinput">Phone Number</p>
                <input type="number" class="input-text-field " required>
            </div>
            <div class="pass-type age-gen">
                <div class="pass-gender">
                    <p class="textinput">Gender</p>
                    <div class="custom-select">
                        <select name="" id="">
                        <option value="0">Select</option>
                        <option value="asdasd">female</option>
                        <option value="asdasd">male</option>
                    </select>
                    </div>
                </div>
                <div class="pass-age">
                    <p class="textinput">Age</p>
                    <div class="custom-select">
                        <select name="" id="">
                        <option value="0">1</option>
                        <option value="asdasd">2</option>
                        <option value="asdasd">3</option>
                    </select>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</div>`);
i++;

})

// removeButton.addEventListener('click',target=>{
//     console.log("remove");
//     const extraDivision=document.querySelector("#extraDiv1");
//     extraDivision.innerHTML=``;
// });
function Delete(event, id) {
    event.preventDefault();
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}