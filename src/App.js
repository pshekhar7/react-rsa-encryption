import React, { useState } from 'react';
import forge from 'node-forge';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handlePublicKeyChange = (event) => {
    setPublicKey(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const encryptText = () => {
    try {
      // Convert Base64 public key to a forge public key object
      // const publicKeyForge = forge.pki.certificateFromAsn1('-----BEGIN CERTIFICATE-----\
      // MIIERzCCAy+gAwIBAgIIRkJL3X2j2skwDQYJKoZIhvcNAQELBQAwcTELMAkGA1UEBhMCSU4xCzAJBgNVBAgMAk1IMQ8wDQYDVQQHDAZNdW5iYWkxDTALBgNVBAoMBEF4aXMxEjAQBgNVBAsMCUF4aXMgQmFuazEhMB8GA1UEAwwYcmd3Lmp3ZWp3cy51YXQuYXhpc2IuY29tMB4XDTIzMDEwMzA1MzM0MloXDTI4MDEwMjA1MzM0MlowcTELMAkGA1UEBhMCSU4xCzAJBgNVBAgMAk1IMQ8wDQYDVQQHDAZNdW5iYWkxDTALBgNVBAoMBEF4aXMxEjAQBgNVBAsMCUF4aXMgQmFuazEhMB8GA1UEAwwYcmd3Lmp3ZWp3cy51YXQuYXhpc2IuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsnQpZr0a8kkIriT+rwwpAJ89IidiLfnII4/wW8gqgTXiijDkBCKuL1Unbw5Tu4c/KRPFc7exhelePG+jPZtSTo5Kqy2IlosP4MOi4LFLNV4l8102nipumJ0KUAjnkGsalY2omIuae2uq6PI4gHhezCS0Q742qIbKI52tPw9ZTxeF8csPLn1dZPooJeK/3gWA3JS1YTvqx1xANAKyy6eaXsrIBPZar/pypwNmfpbLk+smVxLem5gyG2Jmi56SOhQFXAVW1NBbgeIEPsYlbghIFrzBXwzS8Hwcl2YMDl0UJsSzquAOcFhuDh6ZKqki6tgFN+KCczeBCPDKsBVZtGdJVQIDAQABo4HiMIHfMAwGA1UdEwQFMAMBAf8wHQYDVR0OBBYEFFAH79oC8dZ3Csggp0RdAL0QsLQJMIGiBgNVHSMEgZowgZeAFFAH79oC8dZ3Csggp0RdAL0QsLQJoXWkczBxMQswCQYDVQQGEwJJTjELMAkGA1UECAwCTUgxDzANBgNVBAcMBk11bmJhaTENMAsGA1UECgwEQXhpczESMBAGA1UECwwJQXhpcyBCYW5rMSEwHwYDVQQDDBhyZ3cuandlandzLnVhdC5heGlzYi5jb22CCEZCS919o9rJMAsGA1UdDwQEAwICvDANBgkqhkiG9w0BAQsFAAOCAQEALxNfMn7gVCJQgNxJ2iwXnw41ZM8BZf/iwIKrMkeFZcnqnxSwTpGxKAaRy3ExkyGBVmJQuGIEIjCGJfqp2SUNcr1UsFuy5kljiePR2TtjTZa4WwQ7RYFP9tk6u+0r7aVLk/jzfDx+ZHYjNjvy6TpFkMJB0fASwboRHxlv0TDpO66E0cEpJpfrkI7MEZSf6DTam+qn4OFUiqspG2ooclf9l9hIg4QeRJegWhPJvcqSpAnasLyhHLpTfgZFetVDNwwCYqu4XEb2fyySOy/WgGcz7fOU4mO1HxQ84TURjWhCbEmiAVHGY3y5Mc1tKgEupSvUGSSO2SlL9EXngunkv4cLTw==\
      // -----END CERTIFICATE-----');
      const pubPem  = forge.pki.certificateFromPem('-----BEGIN CERTIFICATE-----\
      MIIERzCCAy+gAwIBAgIIRkJL3X2j2skwDQYJKoZIhvcNAQELBQAwcTELMAkGA1UEBhMCSU4xCzAJBgNVBAgMAk1IMQ8wDQYDVQQHDAZNdW5iYWkxDTALBgNVBAoMBEF4aXMxEjAQBgNVBAsMCUF4aXMgQmFuazEhMB8GA1UEAwwYcmd3Lmp3ZWp3cy51YXQuYXhpc2IuY29tMB4XDTIzMDEwMzA1MzM0MloXDTI4MDEwMjA1MzM0MlowcTELMAkGA1UEBhMCSU4xCzAJBgNVBAgMAk1IMQ8wDQYDVQQHDAZNdW5iYWkxDTALBgNVBAoMBEF4aXMxEjAQBgNVBAsMCUF4aXMgQmFuazEhMB8GA1UEAwwYcmd3Lmp3ZWp3cy51YXQuYXhpc2IuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsnQpZr0a8kkIriT+rwwpAJ89IidiLfnII4/wW8gqgTXiijDkBCKuL1Unbw5Tu4c/KRPFc7exhelePG+jPZtSTo5Kqy2IlosP4MOi4LFLNV4l8102nipumJ0KUAjnkGsalY2omIuae2uq6PI4gHhezCS0Q742qIbKI52tPw9ZTxeF8csPLn1dZPooJeK/3gWA3JS1YTvqx1xANAKyy6eaXsrIBPZar/pypwNmfpbLk+smVxLem5gyG2Jmi56SOhQFXAVW1NBbgeIEPsYlbghIFrzBXwzS8Hwcl2YMDl0UJsSzquAOcFhuDh6ZKqki6tgFN+KCczeBCPDKsBVZtGdJVQIDAQABo4HiMIHfMAwGA1UdEwQFMAMBAf8wHQYDVR0OBBYEFFAH79oC8dZ3Csggp0RdAL0QsLQJMIGiBgNVHSMEgZowgZeAFFAH79oC8dZ3Csggp0RdAL0QsLQJoXWkczBxMQswCQYDVQQGEwJJTjELMAkGA1UECAwCTUgxDzANBgNVBAcMBk11bmJhaTENMAsGA1UECgwEQXhpczESMBAGA1UECwwJQXhpcyBCYW5rMSEwHwYDVQQDDBhyZ3cuandlandzLnVhdC5heGlzYi5jb22CCEZCS919o9rJMAsGA1UdDwQEAwICvDANBgkqhkiG9w0BAQsFAAOCAQEALxNfMn7gVCJQgNxJ2iwXnw41ZM8BZf/iwIKrMkeFZcnqnxSwTpGxKAaRy3ExkyGBVmJQuGIEIjCGJfqp2SUNcr1UsFuy5kljiePR2TtjTZa4WwQ7RYFP9tk6u+0r7aVLk/jzfDx+ZHYjNjvy6TpFkMJB0fASwboRHxlv0TDpO66E0cEpJpfrkI7MEZSf6DTam+qn4OFUiqspG2ooclf9l9hIg4QeRJegWhPJvcqSpAnasLyhHLpTfgZFetVDNwwCYqu4XEb2fyySOy/WgGcz7fOU4mO1HxQ84TURjWhCbEmiAVHGY3y5Mc1tKgEupSvUGSSO2SlL9EXngunkv4cLTw==\
      -----END CERTIFICATE-----');
      // Encrypt the input text using RSA-OAEP encryption
      const encrypted = pubPem.publicKey.encrypt(inputText, 'RSAES-PKCS1-V1_5', {
        md: forge.md.sha256.create(),
        mgf1: {
          md: forge.md.sha256.create()
        }
      });

      // Convert the encrypted bytes to Base64
      const encryptedBase64 = forge.util.encode64(encrypted);

      // Set the encrypted text to state
      setEncryptedText(encryptedBase64);
    } catch (error) {
      console.error('Encryption error:', error);
    }
  };

  return (
    <div>
      <h1>RSA Encryption in React</h1>
      <div>
        <textarea
          rows={4}
          cols={50}
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text to encrypt"
        />
      </div>
      <div>
        <input
          type="text"
          value={publicKey}
          onChange={handlePublicKeyChange}
          placeholder="Enter public key (Base64)"
        />
      </div>
      <div>
        <button onClick={encryptText}>Encrypt</button>
      </div>
      <div>
        <h3>Encrypted Text:</h3>
        <textarea rows={4} cols={50} value={encryptedText} readOnly />
      </div>
    </div>
  );
};

export default App;
