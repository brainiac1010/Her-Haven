import blogsData from '../../../data/blogs.json';

const Blogs = () => {
    // console.log(blogsData);
    return (
        <section className='section__container blog__container'>
            <h2 className='section__header'>Latest From Blog</h2>
            <p className='section__subheader '>Elevate your wardrobe with the latest style tips, trends, and inspiration on our blog.</p>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    blogsData.map(({ imageUrl, subtitle, title, date }, index) => (
                        <div key={index} className='blog__card cursor-pointer hover:scale-105 transition-all duration-300 '>
                            <img src={imageUrl || 'default-image.jpg'} alt="blog image" />
                            <div className='blog__card__content'>
                                <h6>{subtitle}</h6>
                                <h4>{title}</h4>
                                <p>{date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Blogs;
