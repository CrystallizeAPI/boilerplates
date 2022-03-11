import * as Types from '../../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ComponentFragmentDoc, ContentFragmentDoc } from '../../fragments/content.generated';
export type Speaker_Document_Fragment = (
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
  )>, company?: Types.Maybe<(
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
  )>, job?: Types.Maybe<(
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
  )>, image?: Types.Maybe<(
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
);

export type Speaker_Folder_Fragment = (
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
  )>, company?: Types.Maybe<(
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
  )>, job?: Types.Maybe<(
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
  )>, image?: Types.Maybe<(
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
);

export type Speaker_Product_Fragment = (
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
  )>, company?: Types.Maybe<(
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
  )>, job?: Types.Maybe<(
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
  )>, image?: Types.Maybe<(
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
);

export type SpeakerFragment = Speaker_Document_Fragment | Speaker_Folder_Fragment | Speaker_Product_Fragment;

export const SpeakerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"speaker"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"name","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"company"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"company","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"job"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"job-title","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"speaker-image","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"social"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"social","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}}]}},...ComponentFragmentDoc.definitions]} as unknown as DocumentNode<SpeakerFragment, unknown>;