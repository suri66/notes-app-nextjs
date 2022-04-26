import Link from 'next/link';
import React from 'react';
import { Table } from 'reactstrap';

function ListTable({ data = [] }) {
  return (
    <div>
      {data.length ? (
        <Table striped>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>
                  <Link href={`/notes/edit?${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        'No Data'
      )}
    </div>
  );
}

export default ListTable;
