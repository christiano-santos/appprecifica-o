import './ProductFraction.css';
import Seta from '../SetaComponent/Seta';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../Global/GlobalState';

function ProductFraction(){

    const theContext = useContext(GlobalContext);
    const [prodFraction, setprodFraction] = useState([]);

    useEffect(() => {
        const productCalc = theContext.products.map((p) => {
            return { [p] : {fracao:0,tprod:0,valor:0,totalgasto:0}};
        });
        setprodFraction(productCalc);
    },[theContext.products]);


    const handleSubmit = (e) => {    
        var index = prodFraction.indexOf(prodFraction.find(el => el[e.target.id]));
        prodFraction[index][e.target.id][e.target.name] = e.target.value;
    }

    const handleCalc = () => {
        prodFraction.forEach(element => {
          var prod = Object.keys(element);
          if (prod[0] === 'preco-hora') {
                element[prod]['totalgasto'] = Math.ceil((parseFloat(element[prod]['fracao']) * parseFloat(element[prod]['valor']))).toFixed(2);
            }else if(prod[0] === 'embalagem'){
                element[prod]['totalgasto'] = Math.ceil((parseFloat(element[prod]['valor']))).toFixed(2);
            }else if(prod[0] === 'entrega'){
                element[prod]['totalgasto'] = Math.ceil((parseFloat(element[prod]['valor']))).toFixed(2);
            }else if(prod[0] === 'energia'){
                element[prod]['totalgasto'] = Math.ceil((parseFloat(element[prod]['valor']))).toFixed(2);
            }else if(prod[0] === 'gas'){
                element[prod]['totalgasto'] = Math.ceil((parseFloat(element[prod]['valor']))).toFixed(2);
            }
            else{
                element[prod]['totalgasto'] = Math.ceil((element[prod]['valor'] / element[prod]['tprod']) * element[prod]['fracao']).toFixed(2);
            }
        });
        theContext.productFraction = prodFraction;
    }
    const Div = () => {
        return(
            theContext.products.map((val) => {
                return(
                    <div key={val}>
                        {val === 'preco-hora' ? 
                        <>
                            <label htmlFor={val}>{val}</label>
                            <div onBlur={handleSubmit}>
                                <input id={val} name='fracao' placeholder='Horas serviço'/>
                                <input id={val} name='valor'  placeholder='Valor Hora' />
                            </div>
                        </>
                            :
                        val === 'embalagem' ? 
                        <>
                            <label htmlFor={val}>{val}</label>
                            <div onBlur={handleSubmit}>
                                <input id={val} name='valor'  placeholder='Valor R$' />
                            </div>
                        </> 
                            :
                        val === 'entrega' ? 
                        <>
                            <label htmlFor={val}>{val}</label>
                            <div onBlur={handleSubmit}>
                                <input id={val} name='valor'  placeholder='Valor R$' />
                            </div>
                        </> 
                                :
                        val === 'energia' ? 
                        <>
                            <label htmlFor={val}>{val}</label>
                            <div onBlur={handleSubmit}>
                                <input id={val} name='valor'  placeholder='Valor R$' />
                            </div>
                        </> 
                                :
                        val === 'gas' ? 
                        <>
                            <label htmlFor={val}>{val}</label>
                            <div onBlur={handleSubmit}>
                                <input id={val} name='valor'  placeholder='Valor R$' />
                            </div>
                        </> 
                                :
                        <>
                            <label htmlFor={val}>{val}</label>
                            <div onBlur={handleSubmit}>
                                <input id={val} name='fracao' placeholder='Qtde ml/g'/>
                                <input id={val} name='tprod'  placeholder='Total prod ml/g' />
                                <input id={val} name='valor'  placeholder='Valor R$' />
                            </div>
                        </>
                        }
                    </div>
                );
           })
        );
    };

    return(
        <div className='container'>
            <div className='subcontainer-product-fraction'>
                <h2>ENTRE COM A FRAÇÃO DOS PRODUTOS E O PREÇO TOTAL DO PRODUTO</h2>
                <div className='products-product-fraction'>
                    <form className='container-form-product-fraction' >
                        <Div />
                    </form>
                </div>
                <Link to='/result-final' onClick={handleCalc}>
                    <Seta />
                </Link>
            </div>
        </div>
    );
}

export default ProductFraction;