import { render } from '@testing-library/react';
import Root from 'layout/Root';
import renderer from 'react-test-renderer';

it('renders app', () => {
    render(<Root />);
});

it('could accept none react element icon', () => {
    const component = renderer.create(<Root />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
