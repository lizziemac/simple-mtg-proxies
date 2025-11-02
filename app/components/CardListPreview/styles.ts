import styled from 'styled-components';

export const PreviewContainerParent = styled.div`
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  text-align: left;

  @media screen and (max-width:1000px) {
    width: 100%;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
`;

export const PrintArea = styled.div`
  display: grid;
  justify-content: center;

  @media print {
    // Remove the default padding, text, etc from printing a browser window
    @page {
      margin: 0;
      padding: 0;
    }

    /* This hides the other HTML on the page */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

interface PageProps {
  pdfMode: boolean;
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

  @media screen {
    margin-bottom: ${({ pdfMode }): string => `${pdfMode ? '0em': '1em'}`};
  }

  &.pdf-mode {
    margin: 0 !important;
    padding: 0;
  }
  
  @media print {
    margin: 0;
    padding: 0;
  }
`;