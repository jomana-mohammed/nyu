import React from 'react';
import Image from 'next/image';
import researchImg from '@/app/assets/imgs/17-1149_209_marketing_photo_shoot_082117.webp';
import researchImg2 from '@/app/assets/imgs/mnm.jpg'

const ResearchesPage = () => {

    return(
        <div>
            <div className="bg-gray-50" style={{marginTop:'120px'}}>
                <div className="p-8">
                    <h1 className="text-3xl font-bold">About Researches</h1>
                    <div className="flex" >
                        <div style={{width:'500px' , height:'300px'}}>
                            <div className="pt-4" >
                                <p>“A great research university produces, preserves, and transmits new ideas, insights, and knowledge. Its basic research activities promote and nurture scientific progress, develop artistic and creative expression, and sustain an informed democratic society and its political life.” – NYU Framework 2031.</p>
                            </div>
                            <div className="pt-4">
                                <p>The modern research university has a dual mission: to educate its students, and to discover new knowledge through scholarship. These two missions enhance and inform one another: students at a research university in many instances are taught by the discoverers of the information being discussed in the course, and the classroom&apos;s free exchange of ideas can help sharpen research.</p>
                            </div>
                        </div>
                        <div style={{marginLeft:'200px' }}>
                            <Image src={researchImg} alt="Description" className="shadow-image" style={{width:'600px' , height:'300px'}} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-gray-50" >
                <div className="p-12" style={{ marginTop:'150px', marginBottom:'40px' , height: '300px', display: 'flex', justifyContent: 'center' }}>
                    <h1 className="text-3xl font-bold">NYU Leads NYC in National Research Ranking</h1>
                    <div style={{fontSize:'17px'}}>
                        <p>For the first time, NYU leads New York City universities in annual research spending according to the National Science Foundation&apos;s (NSF) annual HERD survey.  NYU had the greatest climb in rankings among the top 50 U.S. research universities, moving up eight spots to #15 nationally and #7 among private universities.</p>
                        <p className='pt-2'>“NYU is really proud of this achievement. Our research enterprise—across all of our schools and locations—continues its strong trajectory of growth, and thanks to the ongoing efforts of many across NYU, has proven to be a powerhouse of innovation and impact,” said Stacie Grossman Bloom, NYU&apos;s vice provost for research and chief research officer. </p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={researchImg2} alt="Description" style={{ width:'100%' , height:'400px' , marginTop:'-40px'}} />
            </div>


        </div>
    )
}


export default ResearchesPage ;