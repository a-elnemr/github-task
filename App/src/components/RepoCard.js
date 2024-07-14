import React from 'react';
import {View, StyleSheet} from 'react-native';
import RepoMainContent from './RepoMainContent';
import RepoDetails from './RepoDetails';

function RepoCard({
  RepoTitle,
  RepoDescription,
  RepoLang,
  starCount,
  forkCount,
}) {
  return (
    <RepoMainContent RepoTitle={RepoTitle} RepoDescription={RepoDescription}>
      {{
        repoDetails: (
          <RepoDetails
            RepoLang={RepoLang}
            starCount={starCount}
            forkCount={forkCount}
          />
        ),
      }}
    </RepoMainContent>
  );
}

export default RepoCard;
