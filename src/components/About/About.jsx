import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre nós</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Missão</h3>
              <p>
              Oferecer acesso igualitário a oportunidades de aprendizado, capacitação e desenvolvimento profissional para jovens de baixa renda, promovendo sua inclusão no mercado de trabalho e no mundo dos investimentos, por meio de iniciativas como cursos, mentorias e eventos, sempre com foco na transformação pessoal e profissional.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Visão</h3>
              <p>
              Ser a principal plataforma de inclusão educacional e profissional para jovens em situação de vulnerabilidade, reconhecida pela excelência no impacto positivo gerado.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Valores</h3>
              <p>
                Incluir para transformar! Trabalhamos para quebrar barreiras de acesso e garantir que todos os jovens tenham a chance de desenvolver seu potencial.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
