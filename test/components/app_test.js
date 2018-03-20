import { renderComponent , expect } from '../test_helper';
import Posts from '../../src/index';

describe('Posts' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Posts);
  });

  it('renders something', () => {
    expect(component);
  });
});
