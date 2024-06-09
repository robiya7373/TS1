import './Services.scss';
import team from '../../Assets/Icons/man.svg';
import phone from '../../Assets/Icons/phone.svg';
import eprsys from '../../Assets/Icons/system.svg'



function Services() {
    return (
        <section className='services' id="direction">
            <div className='container'>
                <div className='services-wrapper'>
                    <h2 className='services-wrapper__title'  data-aos='fade-up'  data-aos-duration="500">Our services</h2>
                    <ul className='services-card__list'  data-aos='fade-up'  data-aos-duration="500">
                        <li className='services-card__item'>
                            <img src={team} alt="Team" />
                            <p className='services-card__title'>Team</p>
                        </li>
                        <li className='services-card__item'>
                            <img src={phone} alt="Team" />
                            <p className='services-card__title'>Development of mobile applications</p>
                        </li>
                        <li className='services-card__item'>
                            <img src={eprsys} alt="Team" />
                            <p className='services-card__title'>Development and implementation ERP systems</p>
                        </li>
                        <li className='services-card__item'>
                            <img src={team} alt="Team" />
                            <p className='services-card__title'>User interface, User experience design</p>
                        </li>
                        <li className='services-card__item'>
                            <img src={team} alt="Team" />
                            <p className='services-card__title'>Optimization IT consulting infrastructure</p>
                        </li>
                        <li className='services-card__item'>
                            <img src={team} alt="Team" />
                            <p className='services-card__title'>IT consulting</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};



export default Services;