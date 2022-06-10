import { useState } from "react";

export function AutoCorrection() {
    const [word, setWord] = useState();

   

      function handleChange(event) {
        setWord(event.target.value);
        

          const divider = word.split(" ");

       
        const correction = {
            realy: "really",
            wierd: "weird",
          };

        const correctionArray = Object.getOwnPropertyNames(correction);

        divider.map((params1, params2) => {
            let index = correctionArray.indexOf(params1);
            if (index !== -1) {
                divider[params2] = correction[correctionArray[index]];
                setWord(divider.join(" ")+ " ");
            }
            return true;
        });


      }
    



    return ( 
        <div className="container">

            <h1>Test React MZ</h1>

            <textarea
            name="textarea"
            type="text"
            value={word}
            onChange={handleChange} 




            />
        </div>
     );
}

