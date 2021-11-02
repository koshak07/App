import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { mainContext } from '../contexts/MainContext';

const CreatePage = () => {
    const [product, setProduct] = useState({
        art: '',
        price: 0,
        size: '',
        color: '',
        type: ''
    })
    //useContext возвращает объект хранилища, принимает то хранилище откуда нужно взять данные
    const data = useContext(mainContext)
    const {createProduct} = data //после равно от какого объекта сделать деструктуризацию

        // useHistory это хук, который возвращает объект с различными методами (push, goBack)

        const history = useHistory()


    const handleChange = (event) => {
       
        let object = {
            ...product,
            [event.target.name]: event.target.value
        }
        setProduct(object)
    }

    const handleClick = ()=> {
        createProduct(product)
        history.push('/')
    }

    return (
        <div>
            Create page
            <div>
                <input onChange={handleChange} type="text" name="art" id="" placeholder="Enter art" />
                <input onChange={handleChange} type="number" name="price" id="" placeholder="Enter price" />
                <select onChange={handleChange}  name="size" >
                    <option value="">Выберите размер</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
                <select onChange={handleChange}  name="color">
                    <option value="">Выберите цвет</option>
                    <option value="black">Черный</option>
                    <option value="white">Белый</option>
                    <option value="pink">Розовый</option>
                    <option value="red">Красный</option>
                </select>
                <select onChange={handleChange}  name="type">
                    <option value="">Выберите тип</option>
                    <option value="evening">Вечернее</option>
                    <option value="wedding">Свадебное</option>
                    <option value="casual">Повседневное</option>
                </select>
                <button onClick={handleClick}>Create</button>
            </div>
        </div>
    );
};

export default CreatePage;