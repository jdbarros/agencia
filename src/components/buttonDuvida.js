/** @jsx jsx */
import { IoLogoWhatsapp } from 'react-icons/io';
import { jsx } from 'theme-ui';
import { Box } from 'theme-ui';




export default function ButtonDuvida() {
  return (  
     
    <Box sx={styles.link}>
    <a href="https://wa.me/message/QBCCG7R64D3RH1" target="_blank" rel="noopener noreferrer">
    Quero tirar uma dúvida <IoLogoWhatsapp />
    </a>              
    </Box> 
   
  );
}

const styles= {
  link: {
    color: 'primary',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    pl: ['30px', null, null, '4px', null, '4px'],
    mt: ['5px', null, null, null, '10px'],
    svg: {
      position: 'relative',
      top: '3px',
    },
  },
}