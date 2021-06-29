import { Link } from 'react-router-dom';
import Seta from '../SetaComponent/Seta';
import React, { useEffect, useState, useContext } from 'react'
import './Product.css';
import GlobalContext from '../Global/GlobalState';

function Product(){
    //resolver código dos inputs
    const [products, setProducts] = useState(new Array);
    const theContext = useContext(GlobalContext);

    const SaveContext = () =>{
        theContext.products = products;
        // console.log(theContext.products); 
    }

    const handleProducts = (e) =>{
        let prod =  '';
        let inputValue = e.target.name;
        prod = products.find(element => element === inputValue);
        
        if(!prod){
            setProducts(
                (products) =>
                    {
                       return [...products, inputValue]
                    }
                );
        }else{
            products.splice(products.indexOf(inputValue),1);
        }
    }
    
    // remover esse bloco em prod
    // useEffect(() => {
    //     console.log(products);
    // },[products]);
    
    return(
        <div className='container'>
            <div className='subcontainer-product'>
                <h2>SELECTIONE OS INGREDIENTES PARA PRECIFICAÇÃO</h2>
                <div className='products-product'>
                <form onSubmit={handleProducts}>
                    <div>
                        <input type='checkbox' id='oleo' name='oleo' onChange={handleProducts} />
                        <label htmlFor='oleo'>Óleo</label>
                    </div>
                    <div>
                        <input type='checkbox' id='acucar' name='acucar' onChange={handleProducts} />
                        <label htmlFor='acucar'>Açúcar</label>
                    </div>
                    <div>
                        <input type='checkbox' id='trigo' name='trigo' onChange={handleProducts} />
                        <label htmlFor='trigo'>Trigo</label>
                    </div>
                    <div>
                        <input type='checkbox' id='ovo' name='ovo' onChange={handleProducts} />
                        <label htmlFor='ovo'>Ovos</label>
                    </div>
                    <div>
                        <input type='checkbox' id='manteiga' name='manteiga' onChange={handleProducts} />
                        <label htmlFor='manteiga'>Manteiga</label>
                    </div>
                    <div>
                        <input type='checkbox' id='margarina' name='margarina' onChange={handleProducts} />
                        <label htmlFor='margarina'>Margarina</label>
                    </div>
                    <div>
                        <input type='checkbox' id='chocolate' name='chocolate' onChange={handleProducts} />
                        <label htmlFor='chocolate'>Chocolate</label>
                    </div>
                    <div>
                        <input type='checkbox' id='leite-liquido' name='leite-liquido' onChange={handleProducts} />
                        <label htmlFor='leite'>Leite Líquido</label>
                    </div>
                    <div>
                        <input type='checkbox' id='leite-po' name='leite-po' onChange={handleProducts} />
                        <label htmlFor='leite'>Leite Pó</label>
                    </div>
                    <div>
                        <input type='checkbox' id='maizena' name='maizena' onChange={handleProducts} />
                        <label htmlFor='maizena'>Maizena</label>
                    </div>
                    <div>
                        <input type='checkbox' id='fermento' name='fermento' onChange={handleProducts} />
                        <label htmlFor='fermento'>Fermento</label>
                    </div>
                    <div>
                        <input type='checkbox' id='leite-condensado' name='leite-condensado' onChange={handleProducts} />
                        <label htmlFor='leite-condensado'>Leite Condensado</label>
                    </div>
                    <div>
                        <input type='checkbox' id='creme-leite' name='creme-leite' onChange={handleProducts} />
                        <label htmlFor='creme-leite'>Creme de Leite</label>
                    </div>
                    <div>
                        <input type='checkbox' id='essencia-baunilha' name='essencia-baunilha' onChange={handleProducts} />
                        <label htmlFor='essencia-baunilha'>Essência de Baunilha</label>
                    </div>
                    <div>
                        <input type='checkbox' id='embalagem' name='embalagem' onChange={handleProducts} />
                        <label htmlFor='embalagem'>Embalagem</label>
                    </div>
                    <div>
                        <input type='checkbox' id='gas' name='gas' onChange={handleProducts} />
                        <label htmlFor='gas'>Gás</label>
                    </div>
                    <div>
                        <input type='checkbox' id='energia' name='energia' onChange={handleProducts} />
                        <label htmlFor='energia'>Energia</label>
                    </div>
                    <div>
                        <input type='checkbox' id='entrega' name='entrega' onChange={handleProducts} />
                        <label htmlFor='entrega'>Taxa de Emtrega</label>
                    </div>
                    <div>
                        <input type='checkbox' id='preco-hora' name='preco-hora' onChange={handleProducts} />
                        <label htmlFor='preco-hora'>Preço Hora de Trabalho</label>
                    </div>
                    <div>
                        <input type='checkbox' id='flocos' name='flocos' onChange={handleProducts} />
                        <label htmlFor='flocos'>Flocos</label>
                    </div>
                    <div>
                        <input type='checkbox' id='granulado' name='granulado' onChange={handleProducts} />
                        <label htmlFor='granulado'>Granulado</label>
                    </div>
                    <div>
                        <input type='checkbox' id='nesquik' name='nesquik' onChange={handleProducts} />
                        <label htmlFor='nesquik'>Nesquik</label>
                    </div>
                    <div>
                        <input type='checkbox' id='crocante' name='crocante' onChange={handleProducts} />
                        <label htmlFor='crocante'>Crocante</label>
                    </div>
                    <div>
                        <input type='checkbox' id='chantilly' name='chantilly' onChange={handleProducts} />
                        <label htmlFor='chantilly'>Chantilly</label>
                    </div>
                    <div>
                        <input type='checkbox' id='doce-leite' name='doce-leite' onChange={handleProducts} />
                        <label htmlFor='doce-leite'>Doce de Leite</label>
                    </div>
                    <div>
                        <input type='checkbox' id='moussificante' name='moussificante' onChange={handleProducts} />
                        <label htmlFor='moussificante'>Moussificante</label>
                    </div>
                    <div>
                        <input type='checkbox' id='coco' name='coco' onChange={handleProducts} />
                        <label htmlFor='coco'>Coco</label>
                    </div>
                    <div>
                        <input type='checkbox' id='corante' name='corante' onChange={handleProducts} />
                        <label htmlFor='corante'>Corante</label>
                    </div>
                    <div>
                        <input type='checkbox' id='cenoura' name='cenoura' onChange={handleProducts} />
                        <label htmlFor='cenoura'>Cenoura</label>
                    </div>
                    <div>
                        <input type='checkbox' id='gelatina' name='gelatina' onChange={handleProducts} />
                        <label htmlFor='gelatina'>Gelatina</label>
                    </div>
                    <div>
                        <input type='checkbox' id='suco' name='suco' onChange={handleProducts} />
                        <label htmlFor='suco'>Suco</label>
                    </div>
                </form>
                </div>
                <Link to='/product-fraction' onClick={SaveContext}>
                    <Seta />
                </Link>
            </div>
        </div>
    );
}

export default Product;