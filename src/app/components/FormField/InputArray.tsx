import { useState } from 'react';
import Input from './Input';

interface Props {
  name: string;
  register: any;
  errors: any;
  type: string;
  placeholder: string;
  className?: string;
}

export default function InputArray({ name, register, errors, type, placeholder, className }: Props) {
  const [values, setValues] = useState<string[]>([]);

  const handleAddValue = () => {
    setValues([...values, '']);
  };

  const handleRemoveValue = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const handleChangeValue = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    }}>
      <button type="button" onClick={handleAddValue} style={{
        width: "100%",
        height: "2rem",
        borderRadius: "0.5rem",
        border: "none",
        backgroundColor: "#3988ff",
        color: "#fff",
        cursor: "pointer",
        margin: "0.5rem 0",
        fontWeight: "bold",
      }}>
        Adicionar Ocorrência
      </button>
      {
        values.map((value, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <Input
              type={type}
              name={`${name}[${index}]`}
              value={value}
              register={register}
              errors={errors}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeValue(index, e.target.value)
              }
              placeholder={placeholder}
              className={className}
            />
            <button type="button" onClick={() => handleRemoveValue(index)} style={{
              marginLeft: '12px',
              height: "1.6rem",
              width: '3rem',
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#ff3939",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              padding: "0.2rem",
            }}>
              X
            </button>
          </div>
        ))
      }

    </div >
  );
}
