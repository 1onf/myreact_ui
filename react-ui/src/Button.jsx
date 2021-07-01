import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.div`
    width: ${({ width }) =>
        width || '150px'};
    background-color: ${({ theme }) =>
        theme.primaryColor};
`;

export default function Button({
    label,
    children,
    onClick,
    width,
}) {
    return (
        <StyledButton
            onClick={onClick}
            width={width}
        >
            <button>{label}</button>
            {children}
        </StyledButton>
    );
}
