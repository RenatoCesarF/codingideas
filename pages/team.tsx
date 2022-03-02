import NextHead from 'next/head';
import { domAnimation, LazyMotion, m, motion } from 'framer-motion'

import { slideInLeft } from '../helpers/animations';
import globalStyles from '../styles/teammate.styles';
import Author, { getAuthor, getAuthorsList } from '../classes/authorType';
import WEB_SITE_INFO from '../utils/webSiteInfo';

import TeammateCard from '../components/TeammateCard';
import InDevelopment from '../components/InDevelopment';
import HeadTag from '../components/HeadTag';


interface authorsList{
    authors: Author[]
}

const TeamPage = ({authors}: authorsList) => {

    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <HeadTag 
              image="/images/logo.png" 
              title={`${WEB_SITE_INFO.NAME} Team`} 
              description={`${WEB_SITE_INFO.NAME} Team page - Read about our teammates`}
              keywords={['home page']} 
              date={new Date()} 
              url="/team"
            />
            <div className='page'>
                <motion.div  variants={slideInLeft}>
                    <h1>Teams page</h1>
                </motion.div>
                <LazyMotion features={domAnimation}>
                    <m.div className='posts-grid'>
                        {
                            authors.map((teammate: Author, index: number) =>{
                                return <TeammateCard author={teammate} key={index}/>
                            })
                        }
                    </m.div>
                </LazyMotion>
                <InDevelopment/>
            </div>
        </>
    );
}


export async function getStaticProps(){
    const authorsList = getAuthorsList()
    var authors: Author[] = authorsList.map(authorKey => {
        return getAuthor(authorKey[0]);
    });

    return {
      props: {authors}
    };
}

export default TeamPage