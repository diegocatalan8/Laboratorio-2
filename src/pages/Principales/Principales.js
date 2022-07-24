import "./Princpales.css";

export default function Principales() {
    const entradas = [
        {
            name: 'Lasagna',
            price: '$10.00',
            description: 'Lasagna is a dish of Italian origin.',
            img:"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
        },

        {
            name: 'Puyaso',
            price: '$20.00',
            description: 'The cut is also popular with upscale restaurants in Guatemala and Costa Rica, where it is known as "puyaso."',
            img:"https://kreef.com/wp-content/uploads/2020/06/puyazo-1.jpg"

        },
        {
            name: 'Tilapia',
            price: '$15.00',
            description: 'Tilapia is an inexpensive, mild-flavored fish. It is the fourth most commonly consumed type of seafood in the United States.',
            img:"https://www.onceuponachef.com/images/2013/01/blackened-tilapia-1.jpg"
        }

    ];
        return (
            <div className="container-entradas">
            <h1>Platos Principales</h1>
            <div className="container-entradas-dos">
            {entradas.map(entrada => {
                return (
                    <div className="entrada">
                    <picture className="container-comida">
                    
                        <img src={entrada.img} alt={entrada.name} />
                   
                  
                           
                    </picture>

                    <figcaption>
                        <h2>{entrada.name} <small> {entrada.price}</small></h2>
                       
                        <p>{entrada.description}</p>
                     </figcaption>

                     <button>Ordenar</button>
                    </div>
                )
                

            })
            }
            </div>

        </div>
        );

}