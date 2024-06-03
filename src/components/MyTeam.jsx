'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'



const MyTeam = () => {

    const [treeInp, setTreeInp] = useState(0);
    const [standWork, setStandWork] = useState(0);
    const [freqTravel, setFreqTravel] = useState(0);
    const [glovalTror, setGlobalTror] = useState(0);
    const [allPrice, setAllPrice] = useState(0);
    const [disable, setDiable] = useState(true);



    useEffect(() => {
        if (standWork < 1 && freqTravel < 1 && glovalTror < 1) {
            setDiable(true)
        } else {
            setDiable(false)
        }
        const sw = standWork * 5.30
        const ft = freqTravel * 10.60
        const gt = glovalTror * 21.20

        setAllPrice(sw+ft+gt)

    }, [standWork,freqTravel,glovalTror])

    const tandworkdes = () =>{
        if(standWork > 0){
            setStandWork(standWork - 1);
        }
    }
    const gloTror = () =>{
        if(glovalTror > 0){
            setGlobalTror(glovalTror - 1);
        }
    }
    const freqtraveldec = () =>{
        if(freqTravel > 0){
            setFreqTravel(freqTravel - 1);
        }
    }
  

    return (
        <section className='mx-auto my-4 flex flex-col items-center justify-center'>
            <h2 className=" text-[16px] xsm:text-[20px] my-10 sm:text-[30px] text-center font-semibold font-poppins text-black-text">How many people are in your workforce?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mdd:grid-cols-3 items-center justify-center gap-10 flex-wrap">


                <div className="min-h-[450px] rounded-sm hover:shadow-sm border px-4 mdd:px-9  gap-6 text-center py-10 shadow-sm bg-white flex items-center flex-col justify-center">
                    <Image src='/assets/images/list__image-remote-worker.svg' className="" width={60} height={60} alt="image" />
                    <h3 className="text-[22px] font-semibold font-poppins text-black-text">Standard worker</h3>
                    <div>
                        <h5 className='text-[20px] font-semibold'>$5.30</h5>
                        <p className='text-[12px] text-black-text'>Per employee per month</p>
                    </div>
                    <p className="text-black-text text-[14px] font-worksans">Employee sometimes works from home and keeps travel to a minimum. This is the perfect package for employees that don&#39;t travel often for work.</p>

                    <div className='flex px-2 border py-2 items-center justify-center gap-6'>
                        <p onClick={tandworkdes}><FaMinus size={25} /></p>
                        <p className='text-[22px] font-semibold'>{standWork}</p>
                        <p onClick={() => setStandWork(standWork + 1)}><FaPlus size={25} /></p>
                    </div>

                </div>

                {/* card 2  */}
                <div className="min-h-[450px] rounded-sm hover:shadow-sm border px-4 mdd:px-9  gap-6 text-center py-10 shadow-sm bg-white flex items-center flex-col justify-center">
                    <Image src='/assets/images/list__image-plane.svg' className="" width={60} height={60} alt="image" />
                    <h3 className="text-[22px] font-semibold font-poppins text-black-text">Frequent traveller</h3>
                    <div>
                    <h5 className='text-[20px] font-semibold'>$10.60</h5>
                        <p className='text-[12px] text-black-text'>Per employee per month</p>
                    </div>
                    <p className="text-black-text text-[14px] font-worksans">Employee has to occasionally travel for work, for example going to the office, events, or infrequent international meetings.</p>

                    <div className='flex px-2 border py-2 items-center justify-center gap-6'>
                        <p onClick={freqtraveldec}><FaMinus size={25} /></p>
                        <p className='text-[22px] font-semibold'>{freqTravel}</p>
                        <p onClick={() => setFreqTravel(freqTravel + 1)}><FaPlus size={25} /></p>
                    </div>

                </div>


                {/* card 3  */}
                <div className="min-h-[450px] rounded-sm hover:shadow-sm border px-4 mdd:px-9  gap-6 text-center py-10 shadow-sm bg-white flex items-center flex-col justify-center">
                    <Image src='/assets/images/list__image-plane.svg' className="" width={60} height={60} alt="image" />
                    <h3 className="text-[22px] font-semibold font-poppins text-black-text">Globe-trotter</h3>
                    <div>
                    <h5 className='text-[20px] font-semibold'>$21.20</h5>
                        <p className='text-[12px] text-black-text'>Per employee per month</p>
                    </div>
                    <p className="text-black-text text-[14px] font-worksans">Employee travels frequently for work, takes multiple flights per month and has a large carbon footprint.</p>

                    <div className='flex px-2 border py-2 items-center justify-center gap-6'>
                        <p onClick={gloTror}><FaMinus size={25} /></p>
                        <p className='text-[22px] font-semibold'>{glovalTror}</p>
                        <p onClick={() => setGlobalTror(glovalTror + 1)}><FaPlus size={25} /></p>
                    </div>

                </div>

            </div>
                    <div className="flex  my-10 items-center justify-between w-full">
                        <p className="font-semibold text-[16px] xsm:text-[20px] sm:text-[30px] text-black">Total: £ {allPrice.toFixed(2)} / month</p>
                        <button disabled={disable} className={` ${disable ? 'bg-[#14a80050]' : 'bg-green'} px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px]  py-3 rounded-sm text-white font-semibold font-worksans tracking-wide`}>Continus</button>
                    </div>
        </section>
    )
}

export default MyTeam