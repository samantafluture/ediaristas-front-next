import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import Router from 'next/router';
import {
    Link as MuiLink,
    LinkProps as MuiLinkProps,
    ButtonProps
} from '@mui/material';

export interface LinkProps {
    href: string;
    mui?: MuiLinkProps | ButtonProps;
    next?: NextLinkProps;
    Component?: React.ElementType;
    onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
    children,
    href,
    mui,
    next,
    Component = MuiLink,
    ...props
}) => {
    const isNextEnv = Boolean(Router.router);

    // se tiver no ambiente do next, retorna um link do next
    // caso contrário, retorna apenas link do material-ui
    return isNextEnv ? (
        <div>
            <NextLink href={href} passHref {...next}>
                <Component {...mui} {...props}>
                    {children}
                </Component>
            </NextLink>
        </div>
    ) : (
        <Component href={href} {...mui} {...props}>
            {children}
        </Component>
    );
};

export default Link;
