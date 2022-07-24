import "./Entradas.css";


export default function Entradas() {
    const entradas = [
        {
            name: 'Muzarella Sticks',
            price: '$5.00',
            description: 'Muzzarella sticks with a delicious flavor.',
            img:"https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-2-of-5.jpg"
        },

        {
            name: 'Muzarella Sticks',
            price: '$5.00',
            description: 'Muzzarella sticks with a delicious flavor.',
            img:"https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-2-of-5.jpg"

        },
        {
            name: 'Muzarella Sticks',
            price: '$5.00',
            description: 'Muzzarella sticks with a delicious flavor.',
            img:"https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-2-of-5.jpg"

        }

    ];
    return (
       
        <div className="container-entradas">
            <h1>Entradas</h1>
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