import { useState } from 'react'
import './DeliveryForm.css'

export default function DeliveryForm({ closeForm, formStatus, setFormStatus }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [pickup, setPickup] = useState(false);
    const [selectedStores, setSelectedStores] = useState([]);
    const [complete, setComplete] = useState(false)

    const stores = [
        { value: 'store1', label: 'Литейный проспект, 64/78' },
        { value: 'store2', label: 'Ленина, 18/49' },
    ];

    const handleStoreChange = (event) => {
        const { options } = event.target;
        const values = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        setSelectedStores(values);
    };

    const handleSubmit = () => {
        setTimeout(() => {
            setFirstName('')
            setLastName('')
            setAddress('')
            setPickup(false)
            setComplete(true)
            localStorage.removeItem('cart')
        }, 2000)
    };

    if (complete === true) {
        return (
            <div className={formStatus ? 'buy-form_content_active' : 'buy-form_content'}>
                <div className={formStatus ? 'buy-form_active' : 'buy-form'}>
                    <button className='close-form_button' onClick={() => {closeForm; setComplete(false); setFormStatus()}}>Закрыть</button>
                    <p className="info">Заявка оставлена!</p>
                </div>
            </div>
        )
    } return (
        <div className={formStatus ? 'buy-form_content_active' : 'buy-form_content'}>
            <div className={formStatus ? 'buy-form_active' : 'buy-form'}>
                <button className='close-form_button' onClick={closeForm}>Закрыть</button>
                <div className='name-block'>
                    <input
                        className='name-input'
                        placeholder='Имя'
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required

                    />
                </div>
                <div className='lastname-block'>
                    <input
                        className='lastname-input'
                        placeholder='Фамилия'
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required

                    />
                </div>
                <div className='adress-block'>
                    <input
                        className='adress-input'
                        type="text"
                        placeholder='Адрес доставки'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className='self-delivery-block'>
                    <label>
                        <input
                            className='self-delivery-checkbox'
                            type="checkbox"
                            checked={pickup}
                            onChange={() => setPickup(!pickup)}
                        />
                        Заберу из магазина
                    </label>
                </div>
                {pickup && (
                    <div className='self-delivery-adress-block'>
                        <select className='self-delivery-list' value={selectedStores} onChange={handleStoreChange}>
                            {stores.map((store) => (
                                <option key={store.value} value={store.value}>
                                    {store.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <button onClick={handleSubmit} disabled={firstName === '' || lastName === ''} className='submit-button' type="submit">Отправить</button>
            </div>
        </div>
    );
};
