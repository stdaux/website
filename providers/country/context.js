import React, { PureComponent, useState, useEffect, createRef, forwardRef, createContext} from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Router  from 'next/router'
import cx from 'classnames';
import axios from 'axios'

const CountryContext = createContext();

export default CountryContext;