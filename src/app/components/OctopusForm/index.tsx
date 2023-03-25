'use client'
import { useForm } from 'react-hook-form';
import Input from '../FormField/Input';
import InputArray from '../FormField/InputArray';
import style from './style.module.css';

export default function OctopusForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<any>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="unidade" className={style.label}>Unidade</label>
          <select {...register("unidade")} className={style.input}>
            <option value="1º BPM">1º BPM</option>
            <option value="6º BPM">6º BPM</option>
            <option value="11º BPM">11º BPM</option>
            <option value="12º BPM">12º BPM</option>
            <option value="13º BPM">13º BPM</option>
            <option value="16º BPM">16º BPM</option>
            <option value="17º BPM">17º BPM</option>
            <option value="18º BPM">18º BPM</option>
            <option value="19º BPM">19º BPM</option>
            <option value="20º BPM">20º BPM</option>
            <option value="25º BPM">25º BPM</option>
            <option value="26º BPM">26º BPM</option>
          </select>
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="dataHoraInicial" className={style.label}>Data e Hora Inicial</label>
          <Input type="datetime-local" name='dataHoraInicial' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="dataHoraFinal" className={style.label}>Data e Hora Final</label>
          <Input type="datetime-local" name='dataHoraFinal' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="veiculosAbordados02Rodas" className={style.label}>Veículos Abordados 02 Rodas</label>
          <Input type="number" name='veiculosAbordados02Rodas' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="veiculosAbordados04Rodas" className={style.label}>Veículos Abordados 04 Rodas</label>
          <Input type="number" name='veiculosAbordados04Rodas' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="veiculosRecolhidos02Rodas" className={style.label}>Veículos Recolhidos 02 Rodas</label>
          <Input type="number" name='veiculosRecolhidos02Rodas' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="veiculosRecolhidos04Rodas" className={style.label}>Veículos Recolhidos 04 Rodas</label>
          <Input type="number" name='veiculosRecolhidos04Rodas' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="veiculosRecuperados02Rodas" className={style.label}>Veículos Recuperados 02 Rodas</label>
          <InputArray type="text" name='veiculosRecuperados02RodasMike' placeholder='BOE/MIKE' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="veiculosRecuperados04Rodas" className={style.label}>Veículos Recuperados 04 Rodas</label>
          <InputArray type="text" name='veiculosRecuperados04RodasMike' placeholder='BOE/MIKE' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="armasApreendidas" className={style.label}>Armas Apreendidas</label>
          <InputArray type="text" name='armasApreendidasMike' placeholder='BOE/MIKE' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="celularesApreendidos" className={style.label}>Celulares Apreendidos</label>
          <InputArray type="text" name='celularesApreendidosMike' placeholder='BOE/MIKE' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="cnhApreendidas" className={style.label}>CNH Apreendidas</label>
          <Input type="number" name='cnhApreendidas' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="crlvApreendidos" className={style.label}>CRLV Apreendidos</label>
          <Input type="number" name='crlvApreendidos' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="outrosApreendidos" className={style.label}>Outros Apreendidos</label>
          <Input type="number" name='outrosApreendidos' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <div className={style.divider}>
        <div className={style.formField}>
          <label htmlFor="crimesDeTransito" className={style.label}>Crimes de Trânsito</label>
          <Input type="number" name='crimesDeTransito' register={register} errors={errors} className={style.input} />
        </div>

        <div className={style.formField}>
          <label htmlFor="notificacoes" className={style.label}>Notificações</label>
          <Input type="number" name='notificacoes' register={register} errors={errors} className={style.input} />
        </div>
      </div>

      <button type="submit" className={style.button}>Enviar</button>
    </form >
  )
}