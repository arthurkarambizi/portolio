import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { CardProps } from './Card.types';

const mockData: CardProps = {
    data: {
        title: 'Test Title',
        image: 'test-image.jpg',
        links: {
            live: 'https://live-link.com',
            github: 'https://github-link.com',
        },
        tags: ['tag1', 'tag2'],
    },
};

describe('Card', () => {
    it('renders Card content', () => {
        render(<Card {...mockData} />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('displays the correct tags', () => {
        render(<Card {...mockData} />);
        expect(screen.getByText('tag1')).toBeInTheDocument();
        expect(screen.getByText('tag2')).toBeInTheDocument();
    });

    it('displays the correct links', () => {
        render(<Card {...mockData} />);
        const githubLink = screen.getByRole('link', { name: /Code/i });
        const liveLink = screen.getByRole('link', { name: /Live Preview/i });
        expect(githubLink).toHaveAttribute('href', 'https://github-link.com');
        expect(liveLink).toHaveAttribute('href', 'https://live-link.com');
    });
});
