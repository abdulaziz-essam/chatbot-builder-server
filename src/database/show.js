import db from '../database/connect.js';
import  axios  from 'axios';
import fs  from 'fs';
import yaml  from 'js-yaml';

const show =async () => {
 

        axios.get('http://chatbuilders.xyz:4000/show').then(resp => {
                console.log(resp.data);
                let intentObjs = resp.data
                let yamlStr = yaml.dump(intentObjs);
                fs.writeFileSync('data-out.yaml', yamlStr, 'utf8');
        });

}
export default show