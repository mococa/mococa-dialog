import React from 'react';
import './styles.index.css';
import { ToastrCreation, ProviderInterface } from './interfaces';
export declare const ToastrContext: React.Context<ToastrCreation | null>;
export declare const ToastrProvider: React.FC<ProviderInterface>;
