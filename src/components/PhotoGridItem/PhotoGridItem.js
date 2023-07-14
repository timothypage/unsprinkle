import React from 'react';
import styled from 'styled-components/macro';

const sizes = ['1x', '2x', '3x'];

function sizePhotoMap(size) {
  const replacement = size === '1x' ? `.${this.type} 1x` : `@${size}.${this.type} ${size}`

  return `${this.src.replace('.jpg', replacement)}`
}

const PhotoGridItem = ({ id, src, alt, tags }) => {

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={sizes.map(sizePhotoMap.bind({type: 'avif', src})).join(',\n')}
          />
          <source
            type="image/jpeg"
            srcSet={sizes.map(sizePhotoMap.bind({type: 'jpg', src})).join(',\n')}
          />
          <Image src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;

  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
  padding:  4px 0;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  display: inline;
  margin-right: 4px;
`;

export default PhotoGridItem;
