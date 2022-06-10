import { useState } from "react";
import "./Style.css"

export function AutoCorrection() {
    const [word, setWord] = useState(); //Variavel state

   
    // Função handleChange tem por objetivo validar toda a lógica do código, deixando o return mais limpo e de fácil entendimento
      function handleChange(event) {
        setWord(event.target.value);
        

          const divider = word.split(" ");

       
        const correction = {
            realy: "really",
            wierd: "weird",
            sku: "sky",
            waht: "What",
          };
        // Usando o método Object.getOwnPropertyNames conseguimos acessar o vetor das propriedades do objeto, no caso a varaivel "correction"
        const correctionArray = Object.getOwnPropertyNames(correction); 



         // Realizei um map na variavel divider passando duas propriedades correndo elas pelo indexOf (retornando o primeiro índice encontrado no array)
        divider.map((props1, props2) => {
            let index = correctionArray.indexOf(props1);
            if (index !== -1) {
                divider[props2] = correction[correctionArray[index]]; // Se minha variavel index não for igual ao indexOf(-1) então minha variavel divider(obj) recebe o valor de props2, chamando minha setWord de meu use state.
                setWord(divider.join(" ")+ " ");
            }
            return true;
        });


      }
    



    return ( 
        <div className="container">

            <h1 className="h1">Test React MZ</h1>

            <textarea
            placeholder="Put your text here..."
            className="textarea"
            name="textarea"
            type="text"
            value={word}
            onChange={handleChange} 
            />
        </div>
     );
}

