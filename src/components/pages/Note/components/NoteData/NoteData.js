import React from 'react';
import PropTypes from 'prop-types';
import Description from 'components/common/Description';
import NoteActions from '../NoteActions';
import { useQuery } from 'react-query';
import SmallTitle from 'components/common/SmallTitle';
import { Root, Header, ModifyDate, Content } from './NoteData.styles';
import { useTranslation } from 'react-i18next';
import API from 'store/api';

const NoteData = ({ token, id }) => {
  const { t, i18n } = useTranslation();

  const { data } = useQuery(['note', { id, token }], API.notes.getNote, { suspense: true });

  const lang = i18n.language === 'pl-PL' ? i18n.language : 'eng-Gb';
  const modifyDate =  new Intl.DateTimeFormat(lang).format(new Date(data.updatedAt));

  return ( 
    <Root>
      <Header>
        <ModifyDate>
          {t('Last update')}: {modifyDate}
        </ModifyDate>
        <SmallTitle 
          margin="small"
          title={data.title}
        />
      </Header>
      <Content>
        <Description 
          text={data.description}
        />
      </Content>
      <NoteActions 
        id={id}
        token={token}
      />
    </Root>
   );
}

NoteData.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default NoteData;