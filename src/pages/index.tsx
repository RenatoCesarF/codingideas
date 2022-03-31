import type { NextPage } from 'next'
import generateRssFeed from '@scripts/rss'

import { motion} from 'framer-motion'
import { slideInLeft } from '@helpers/animations'
import InDevelopment from '@components/InDevelopment'
import HeadTag from '@components/HeadTag';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import AutoGeneratedSumarry from '@components/AutoGeneratedSumarry';
import { createPost } from '@classes/Post'

const Home: NextPage = () => {
  return (
    <div  className='page'>
      <HeadTag 
          image={WEBSITE_INFO.LOGO_PATH}
          title={`${WEBSITE_INFO.NAME}`} 
          description={`${WEBSITE_INFO.NAME} website Home page, Learn more about our work`}
          keywords={['home page', 'home']} 
          date={new Date()} 
          url=""
      />
      <div className='page' >
        <motion.div variants={slideInLeft}>
          <h1>Home</h1>
        </motion.div>
                    
        <AutoGeneratedSumarry content={createPost("a-provisional-logo-and-name.md").content}/>
                        
        <InDevelopment/>
      </div>
      
    </div>
  )
}

export async function getStaticProps(){
  await generateRssFeed();

  return {props: {}};
}

export default Home;
