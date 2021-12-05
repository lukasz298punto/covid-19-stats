import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { StatCard } from 'components/StatCard';
import 'jest-styled-components';

it('renders app', () => {
    render(<StatCard value={1} />);
});

it('could accept none react element icon', () => {
    const component = renderer.create(<StatCard value={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
