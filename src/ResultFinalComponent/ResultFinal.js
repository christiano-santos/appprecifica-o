import './ResultFinal.css';
import Seta from '../SetaComponent/Seta';
import { Link } from 'react-router-dom';
import GlobalContext from '../Global/GlobalState';
import { useContext, useEffect, useState } from 'react';

function ResultFinal(){
    
    const theContext = useContext(GlobalContext);
    const [prodTotal, setprodTotal] = useState(0);
    const [mo, setmo] = useState(0)
    // console.log(theContext.products);

    useEffect(() => {
        console.log(theContext.productFraction);
        theContext.productFraction.map((p) => {
            var prod = Object.keys(p);
            
            if (prod[0] !== 'preco-hora') {
                setprodTotal((prodT) => {
                   return prodT +=  parseFloat(p[prod]['totalgasto']);
                });
            }else {
                setmo(parseFloat(p[prod]['totalgasto']));
            }
        });
    },[]);
    //quebrar esse codigo em um component ou dois
    const Div = () => {
        return(
            theContext.productFraction.map((val) => {
                return(
                    <div key={val}>
                        {Object.keys(val) != 'preco-hora' &&
                            <>
                                <label htmlFor={Object.keys(val)}>{Object.keys(val)}</label>
                                <span>R$ {val[Object.keys(val)]['totalgasto']}</span>
                            </>
                        }
                    </div>
                );
           })
        );
    };

    return(
        <div className='container'>
            <div className='subcontainer-result-final'>
                <h2>RESULTADO FINAL</h2>
                <div className='products-result-final'>
                    <Div />
                </div>
                <div className='result-result-final'>
                    <div>
                        <h3>valor total dos produtos</h3>
                        <div>
                            <span>R$ {prodTotal}</span>
                        </div>
                    </div>
                    <div>
                        <h3>
                            valor total horas de trabalho
                        </h3>
                        <div>
                            <span>R$ {mo}</span>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Total produtos + Horas de trabalho
                        </h3>
                        <div>
                            <span>R$ {mo+prodTotal}</span>
                        </div>
                    </div>
                </div>
                <Link to='/'>
                    <Seta />
                </Link>
            </div>
        </div>
    );
}

export default ResultFinal;