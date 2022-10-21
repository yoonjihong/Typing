import { cleanup, render } from '@testing-library/react';

import { describe, afterAll } from '@jest/globals';

import Typing from './index';

afterAll(() => {
  cleanup();
});

describe('Typing Test', () => {
  const mount = render(<Typing />);
});
