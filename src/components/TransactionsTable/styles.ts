import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;
    margin-top: 2rem;

    tr,
    thead {
      display: grid;
      grid-template-columns: 4fr 2fr 2fr 1fr;
      text-align: left;

      margin-top: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 0.25rem;
    }

    thead {
      font-weight: 400;
      color: var(--text-body);
    }

    tr {
      background: #fff;
      td {
        &.deposit {
          color: var(--green);
        }

        &.withdraw {
          color: var(--red);
        }

        &:nth-child(n + 3) {
          color: var(--text-body);
        }
      }
    }
  }
`;
