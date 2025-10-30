import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }): string => theme.secondaryColor};
  color: ${({ theme }): string => theme.textColor};
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1em;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: ${({ theme }): string => theme.hover};
  }

  &:disabled {
    background-color: ${({ theme }): string => theme.primaryBorderColor};
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

export const PrintArea = styled.div`
  display: grid;
  justify-content: center;

  @media print {
    @page {
      margin: 0;
    }
    body {
      margin: 0;
      padding: 0;
    }

    /* Hide everything except this area (if using that technique) */
    html, body, body * {
      display: none !important;
    }
    &,
    /* Then, only reveal this element and its children */
    & * {
      visibility: visible;
    }

    /* Ensure cards/grid don’t get split awkwardly */
    & {
      page-break-inside: avoid;
    }

    /* Also position it at the top left so it appears first page */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

interface PageProps {
  card: {
    /**
     * The width of a single card in millimeters
     */
    width: number;
    /**
     * The width of a single card in millimeters
     */
    height: number;
  };
  paper: {
    /**
     * The width of the print paper in millimeters
     */
    width: number;
    /**
     * The height of the print paper in millimeters
     */
    height: number;
  };
}
export const Page = styled.div<PageProps>`
  background-color: white;
  width: ${({ paper }): string => `${paper.width}mm`};
  height: ${({ paper }): string => `${paper.height}mm`};
  display: grid;
  grid-template-columns: ${({ card }): string => `repeat(3, ${card.width}mm)`};
  grid-template-rows: ${({ card }): string => `repeat(3, ${card.height}mm)`};
  justify-content: center;
  align-content: center;
  gap: 0.5mm;
  @media screen {
    margin-bottom: 1em;
  }
`;