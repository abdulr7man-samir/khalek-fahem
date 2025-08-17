import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header component', () => {
  it('renders the logo text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoText = screen.getByText(/خليك فاهم/i);
    expect(logoText).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('الرئيسية')).toBeInTheDocument();
    expect(screen.getByText('المواضيع')).toBeInTheDocument();
    expect(screen.getByText('عن التطبيق')).toBeInTheDocument();
    expect(screen.getByText('تواصل معنا')).toBeInTheDocument();
  });
});
