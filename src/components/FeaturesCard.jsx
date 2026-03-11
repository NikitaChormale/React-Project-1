function FeaturesCard ({ title ,description ,imgSrc}) {
    return (
    < div className=' bg-white px-4 py-4 n-4 max-w-[320] rounded-2xl shadow-lg
    cursor-pointer hover:shadow-2xl'>
                <img src={imgSrc} alt={title} className='h-40 mx-auto' />
                <h3 className='text-2xl font-semibold mt-4  nb-2 text-center'>
                  {title}</h3>
                  <p className=' text-center text-gray[700px]'>{description}</p>
              </div>

    );
}

export default FeaturesCard