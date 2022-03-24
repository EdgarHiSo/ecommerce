import './Home.css'
const { useNavigate } = require("react-router-dom");
function Home() {
    const navigate = useNavigate()
    return (
        <div id='main'>
            <header >
                <h1 className='text-center'>Tienda <span>Muebles</span> </h1>
            </header>
            <hr />
            <div className="nav-container contenedor">
                <nav className="enlaces ">
                    <span onClick={() => navigate('')}>Inicio</span>
                    <span onClick={() => navigate('')}>Nosotros</span>
                    <span onClick={() => navigate('')}>Tienda</span>
                    <span onClick={() => navigate('')}>Blog</span>
                    <span onClick={() => navigate('')}>Galería</span>
                    <span onClick={() => navigate('')}>Contacto</span>
                </nav>
            </div>

            <div className="hero"></div>
            <section className='contenedor'>
                <h2 >Categorías de Productos</h2>

                <div className="category-list">

                    <div className='category'>
                        <img src='/img/categoria1.jpg' alt='categoria1' />
                        <span >Oficina</span>
                    </div>

                    <div className='category'>
                        <img src='/img/categoria2.jpg' alt='categoria2' />
                        <span >Hogar</span>
                    </div>

                    <div className='category'>
                        <img src='/img/categoria3.jpg' alt='categoria3' />
                        <span >Cocina</span>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <div className="about-us-grid contenedor">
                    <div className="about-us-text">
                        <h3>Sobre Nosotros</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                            voluptatum fugiat numquam sunt error, odit nostrum sed adipisci
                            minima ipsum labore asperiores. Assumenda delectus necessitatibus
                            iusto, dolore vel quod blanditiis!
                        </p>
                    </div>
                </div>
            </section>

            <main className="main-box contenedor">

                <h2>Nuestros Productos</h2>
                <div className="product-list ">

                    <div className="product">
                        <img src='/img/producto1.jpg' alt='producto1' />
                        <div className="product-text">
                            <h3>Producto 1</h3>
                            <p>
                                Proin condimentum sodales risus ut aliquet. Nunc
                                eu neque quis sapien feugiat posuere sed nec mauris.
                            </p>
                            <p className='price'>$1,000,000.00</p>
                            <span className="btn">Agregar al Carrito</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src='/img/producto2.jpg' alt='producto2' />
                        <div className="product-text">
                            <h3>Producto 2</h3>
                            <p>
                                Proin condimentum sodales risus ut aliquet. Nunc
                                eu neque quis sapien feugiat posuere sed nec mauris.
                            </p>
                            <p className='price'>$1,000,000.00</p>
                            <span className="btn">Agregar al Carrito</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src='/img/producto3.jpg' alt='producto3' />
                        <div className="product-text">
                            <h3>Producto 3</h3>
                            <p>
                                Proin condimentum sodales risus ut aliquet. Nunc
                                eu neque quis sapien feugiat posuere sed nec mauris.
                            </p>
                            <p className='price'>$1,000,000.00</p>
                            <span className="btn">Agregar al Carrito</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src='/img/producto4.jpg' alt='producto4' />
                        <div className="product-text">
                            <h3>Producto 4</h3>
                            <p>
                                Proin condimentum sodales risus ut aliquet. Nunc
                                eu neque quis sapien feugiat posuere sed nec mauris.
                            </p>
                            <p className='price'>$1,000,000.00</p>
                            <span className="btn">Agregar al Carrito</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src='/img/producto5.jpg' alt='producto5' />
                        <div className="product-text">
                            <h3>Producto 5</h3>
                            <p>
                                Proin condimentum sodales risus ut aliquet. Nunc
                                eu neque quis sapien feugiat posuere sed nec mauris.
                            </p>
                            <p className='price'>$1,000,000.00</p>
                            <span className="btn">Agregar al Carrito</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src='/img/producto6.jpg' alt='producto6' />
                        <div className="product-text">
                            <h3>Producto 6</h3>
                            <p>
                                Proin condimentum sodales risus ut aliquet. Nunc
                                eu neque quis sapien feugiat posuere sed nec mauris.
                            </p>
                            <p className='price'>$1,000,000.00</p>
                            <span className="btn">Agregar al Carrito</span>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
export default Home