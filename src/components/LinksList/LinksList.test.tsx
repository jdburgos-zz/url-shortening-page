/** React core **/
import { render } from 'react-dom';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { LinksList } from './LinksList';

describe('LinksList', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');
    const LINKS_LIST = [
      {
        title: 'Company',
        links: [
          {
            title: 'About',
            url: '/company/about',
          },
          {
            title: 'Our Team',
            url: '/company/our-team',
          },
          {
            title: 'Careers',
            url: '/company/careers',
          },
          {
            title: 'Contact',
            url: '/company/contact',
          },
        ],
      },
    ];
    const content = LINKS_LIST.map((list, index) => <LinksList key={index} list={list} />);

    render(<BrowserRouter>{content}</BrowserRouter>, div);
  });
});
