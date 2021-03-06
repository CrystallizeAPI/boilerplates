import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { TeamFragmentDoc } from '../shapes/folders/team.generated';
export type TeamQueryVariables = Types.Exact<{
  path: Types.Scalars['String'];
}>;


export type TeamQuery = (
  { __typename?: 'Query' }
  & { team?: Types.Maybe<(
    { __typename?: 'Document' }
    & Pick<Types.Document, 'id'>
    & { title?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, intro?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, hero?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, values?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, team?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | (
            { __typename: 'ItemRelationsContent' }
            & { items?: Types.Maybe<Array<(
              { __typename?: 'Document' }
              & Pick<Types.Document, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            ) | (
              { __typename?: 'Folder' }
              & Pick<Types.Folder, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            ) | (
              { __typename?: 'Product' }
              & Pick<Types.Product, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            )>> }
          ) | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | { __typename?: 'DatetimeContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
    )> }
  ) | (
    { __typename?: 'Folder' }
    & Pick<Types.Folder, 'id'>
    & { title?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, intro?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, hero?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, values?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, team?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | (
            { __typename: 'ItemRelationsContent' }
            & { items?: Types.Maybe<Array<(
              { __typename?: 'Document' }
              & Pick<Types.Document, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            ) | (
              { __typename?: 'Folder' }
              & Pick<Types.Folder, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            ) | (
              { __typename?: 'Product' }
              & Pick<Types.Product, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            )>> }
          ) | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | { __typename?: 'DatetimeContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
    )> }
  ) | (
    { __typename?: 'Product' }
    & Pick<Types.Product, 'id'>
    & { title?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, intro?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, hero?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, values?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, team?: Types.Maybe<(
      { __typename?: 'Component' }
      & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | (
            { __typename: 'ItemRelationsContent' }
            & { items?: Types.Maybe<Array<(
              { __typename?: 'Document' }
              & Pick<Types.Document, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            ) | (
              { __typename?: 'Folder' }
              & Pick<Types.Folder, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            ) | (
              { __typename?: 'Product' }
              & Pick<Types.Product, 'id'>
              & { name?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, title?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, avatar?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )>, social?: Types.Maybe<(
                { __typename: 'Component' }
                & { content?: Types.Maybe<(
                  { __typename: 'BooleanContent' }
                  & Pick<Types.BooleanContent, 'value'>
                ) | { __typename?: 'ComponentChoiceContent' } | (
                  { __typename: 'ContentChunkContent' }
                  & { chunks: Array<Array<(
                    { __typename?: 'Component' }
                    & { content?: Types.Maybe<(
                      { __typename: 'BooleanContent' }
                      & Pick<Types.BooleanContent, 'value'>
                    ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
                      { __typename: 'DatetimeContent' }
                      & Pick<Types.DatetimeContent, 'datetime'>
                    ) | { __typename?: 'GridRelationsContent' } | (
                      { __typename: 'ImageContent' }
                      & { images?: Types.Maybe<Array<(
                        { __typename: 'Image' }
                        & Pick<Types.Image, 'url' | 'altText' | 'key'>
                        & { variants?: Types.Maybe<Array<(
                          { __typename?: 'ImageVariant' }
                          & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                        )>> }
                      )>> }
                    ) | { __typename?: 'ItemRelationsContent' } | (
                      { __typename: 'LocationContent' }
                      & Pick<Types.LocationContent, 'lat' | 'long'>
                    ) | (
                      { __typename: 'NumericContent' }
                      & Pick<Types.NumericContent, 'number' | 'unit'>
                    ) | (
                      { __typename: 'ParagraphCollectionContent' }
                      & { paragraphs?: Types.Maybe<Array<(
                        { __typename?: 'ParagraphContent' }
                        & { title?: Types.Maybe<(
                          { __typename: 'SingleLineContent' }
                          & Pick<Types.SingleLineContent, 'text'>
                        )>, body?: Types.Maybe<(
                          { __typename: 'RichTextContent' }
                          & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                        )>, images?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { caption?: Types.Maybe<(
                            { __typename: 'RichTextContent' }
                            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                          )>, variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'PropertiesTableContent' }
                      & { sections?: Types.Maybe<Array<(
                        { __typename: 'PropertiesTableSection' }
                        & Pick<Types.PropertiesTableSection, 'title'>
                        & { properties?: Types.Maybe<Array<(
                          { __typename?: 'PropertiesTableValue' }
                          & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                        )>> }
                      )>> }
                    ) | (
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    ) | (
                      { __typename: 'SelectionContent' }
                      & { options?: Types.Maybe<Array<(
                        { __typename?: 'SelectionComponentOption' }
                        & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                      )>> }
                    ) | (
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    ) | (
                      { __typename: 'VideoContent' }
                      & { videos?: Types.Maybe<Array<(
                        { __typename: 'Video' }
                        & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                        & { thumbnails?: Types.Maybe<Array<(
                          { __typename: 'Image' }
                          & Pick<Types.Image, 'url' | 'altText' | 'key'>
                          & { variants?: Types.Maybe<Array<(
                            { __typename?: 'ImageVariant' }
                            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                          )>> }
                        )>> }
                      )>> }
                    )> }
                  )>> }
                ) | (
                  { __typename: 'DatetimeContent' }
                  & Pick<Types.DatetimeContent, 'datetime'>
                ) | { __typename?: 'GridRelationsContent' } | (
                  { __typename: 'ImageContent' }
                  & { images?: Types.Maybe<Array<(
                    { __typename: 'Image' }
                    & Pick<Types.Image, 'url' | 'altText' | 'key'>
                    & { variants?: Types.Maybe<Array<(
                      { __typename?: 'ImageVariant' }
                      & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                    )>> }
                  )>> }
                ) | { __typename?: 'ItemRelationsContent' } | (
                  { __typename: 'LocationContent' }
                  & Pick<Types.LocationContent, 'lat' | 'long'>
                ) | (
                  { __typename: 'NumericContent' }
                  & Pick<Types.NumericContent, 'number' | 'unit'>
                ) | (
                  { __typename: 'ParagraphCollectionContent' }
                  & { paragraphs?: Types.Maybe<Array<(
                    { __typename?: 'ParagraphContent' }
                    & { title?: Types.Maybe<(
                      { __typename: 'SingleLineContent' }
                      & Pick<Types.SingleLineContent, 'text'>
                    )>, body?: Types.Maybe<(
                      { __typename: 'RichTextContent' }
                      & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                    )>, images?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { caption?: Types.Maybe<(
                        { __typename: 'RichTextContent' }
                        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                      )>, variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'PropertiesTableContent' }
                  & { sections?: Types.Maybe<Array<(
                    { __typename: 'PropertiesTableSection' }
                    & Pick<Types.PropertiesTableSection, 'title'>
                    & { properties?: Types.Maybe<Array<(
                      { __typename?: 'PropertiesTableValue' }
                      & Pick<Types.PropertiesTableValue, 'key' | 'value'>
                    )>> }
                  )>> }
                ) | (
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                ) | (
                  { __typename: 'SelectionContent' }
                  & { options?: Types.Maybe<Array<(
                    { __typename?: 'SelectionComponentOption' }
                    & Pick<Types.SelectionComponentOption, 'key' | 'value'>
                  )>> }
                ) | (
                  { __typename: 'SingleLineContent' }
                  & Pick<Types.SingleLineContent, 'text'>
                ) | (
                  { __typename: 'VideoContent' }
                  & { videos?: Types.Maybe<Array<(
                    { __typename: 'Video' }
                    & Pick<Types.Video, 'id' | 'title' | 'playlists'>
                    & { thumbnails?: Types.Maybe<Array<(
                      { __typename: 'Image' }
                      & Pick<Types.Image, 'url' | 'altText' | 'key'>
                      & { variants?: Types.Maybe<Array<(
                        { __typename?: 'ImageVariant' }
                        & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                      )>> }
                    )>> }
                  )>> }
                )> }
              )> }
            )>> }
          ) | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | { __typename?: 'DatetimeContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
    )> }
  )> }
);


export const TeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Team"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"team"}}]}}]}},...TeamFragmentDoc.definitions]} as unknown as DocumentNode<TeamQuery, TeamQueryVariables>;