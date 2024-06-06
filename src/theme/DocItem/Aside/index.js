import React from 'react';

import {useDoc} from '@docusaurus/theme-common/internal';
import {ShareButtons} from "../../../components/ShareButtons";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import {useWindowSize} from "@docusaurus/theme-common";
import styles from './styles.module.scss';
import clsx from "clsx";

const DocTOCDesktop = () => {
	const {frontMatter, toc} = useDoc();
	const windowSize = useWindowSize();
	const hidden = frontMatter.hide_table_of_contents;
	const canRender = !hidden && toc.length > 0;
	return 		canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
		<DocItemTOCDesktop/>
	) : undefined;
}
export default function DocItemAside() {

	return <div className={clsx(styles.docItemAside, `h-100 border-start ps-30`)}>
		<div className={clsx(styles.docItemAsideInner)}>
			{DocTOCDesktop()}

			<ShareButtons url={`#`}/>
 		</div>
	</div>
}
