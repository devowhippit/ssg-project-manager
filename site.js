import lume from 'lume/mod.ts';
import pug from 'lume/plugins/pug.ts';
import postcss from 'lume/plugins/postcss.ts';

const site = lume();

site.use(pug());
site.use(postcss());

site.copy('img');
site.copy('CNAME');

export default site;
