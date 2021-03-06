import React from 'react';
import {Card} from 'coral-ui';
import styles from './Configure.css';
import TagsInput from 'react-tagsinput';
import t from 'coral-framework/services/i18n';

const Domainlist = ({domains, onChangeDomainlist}) => {
  return (
    <Card id={styles.domainlist} className={styles.configSetting}>
      <div className={styles.wrapper}>
        <div className={styles.settingsHeader}>{t('configure.domain_list_title')}</div>
        <p className={styles.domainlistDesc}>{t('configure.domain_list_text')}</p>
        <div className={styles.wrapper}>
          <TagsInput
            value={domains}
            inputProps={{placeholder: 'URL'}}
            addOnPaste={true}
            pasteSplit={(data) => data.split(',').map((d) => d.trim())}
            onChange={(tags) => onChangeDomainlist('whitelist', tags)}
          />
        </div>
      </div>
    </Card>
  );
};

export default Domainlist;
